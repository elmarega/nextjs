"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BestProducts,
  Container,
  NewProduct,
  PaginationButton,
  PaginationContainer,
  Title,
  WrapperHome,
} from "./styles/home-styles";
import {
  addProduct,
  deleteProduct,
  fetchCategories,
  fetchProducts,
  updateProduct,
} from "@/app/shared/services/products-services";
import { sortProductsByRating } from "@/app/shared/utils/sort-by-rating";
import ModalProductView from "./components/ModalProductView";
import ModalEditAdd from "./components/ModalEditAdd";
import ModalConfirm from "./components/ModalConfirm";
import ModalSuccess from "./components/ModalSuccess";
import ProductCard from "./components/ProductCard";
import FilterOrder from "./components/FilterOrder";

export default function ProductsPage() {
  const queryClient = useQueryClient();
  const { reset, setValue } = useForm();
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenConfirm, setIsModalOpenConfirm] = useState(false);
  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);
  const [productView, setProductView] = useState<any>(null);
  const [productToDelete, setProductToDelete] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset();
      setEditingProduct(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setIsModalOpenConfirm(false);
      setProductToDelete(null);
      setIsModalOpenSuccess(true);
    },
  });

  const onSubmit = (data: any) => {
    if (editingProduct) {
      updateMutation.mutate({ id: editingProduct.id, ...data });
    } else {
      addMutation.mutate({ title: data.title, description: data.description });
    }
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setValue("title", product.title);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("category", product.category);
    setIsModalOpenEdit(true);
  };

  const handleDelete = (product: any) => {
    setProductToDelete(product); 
    setIsModalOpenConfirm(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteMutation.mutate(productToDelete.id);
    }
  };

  const handleView = (product: any) => {
    setProductView(product);
    setIsModalOpen(true);
  };
  

  let filteredProducts = category
    ? products?.filter((product: any) => product.category === category)
    : products;

  let bestProducts = [...(filteredProducts ?? [])].filter((product) => {
    return product.rating.rate >= 4.5;
  });

  filteredProducts = sortProductsByRating(filteredProducts ?? []);

  if (sortOrder === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  if (isLoading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro ao carregar produtos</p>;

  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <WrapperHome>
      <NewProduct>
        <button className="primary" onClick={() => setIsModalOpenEdit(true)}>
          Novo Produto
        </button>
      </NewProduct>
      <Title>
        <h2>Destaques</h2>
      </Title>
      <BestProducts>
        {bestProducts.map((product: any) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </div>
        ))}
      </BestProducts>
      <Title>
        <h2>Listagem de produto</h2>
      </Title>
      <FilterOrder
        categories={categories ?? []}
        onCategoryChange={setCategory}
        onSortOrderChange={setSortOrder}
      />
      <Container>
        {currentProducts.map((product: any) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </div>
        ))}
      </Container>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
      <ModalProductView
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productView={productView}
      />
      <ModalEditAdd
        isOpen={isModalOpenEdit}
        onClose={() => {
          setIsModalOpenEdit(false);
          setEditingProduct(null);
        }}
        onSubmit={onSubmit}
        editingProduct={editingProduct}
      />
      <ModalConfirm
        isOpen={isModalOpenConfirm}
        onClose={() => setIsModalOpenConfirm(false)}
        onConfirm={confirmDelete}
        productTitle={productToDelete?.title}
      />
      <ModalSuccess
        isOpen={isModalOpenSuccess}
        onClose={() => setIsModalOpenSuccess(false)}
      />
    </WrapperHome>
  );
}
