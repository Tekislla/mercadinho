import { Router } from "express";

import {
  createFornecedor,
  getFornecedores,
  getFornecedorById,
  updateFornecedor,
  deleteFornecedor
} from "../controller/fornecedor-controller.js";

import {
  createDespesa,
  getDespesas,
  getDespesaById,
  updateDespesa,
  deleteDespesa
} from "../controller/despesas-controller.js";

import {
  getCategorias
} from "../controller/categoria-controller.js";

import {
  getFormasPagto
} from "../controller/forma-pagto-controller.js";


const router = Router();

// Fornecedores
router.post("/fornecedores/add", createFornecedor);
router.get("/fornecedores", getFornecedores);
router.get("/fornecedores/:id", getFornecedorById);
router.put("/fornecedores/update", updateFornecedor);
router.delete("/fornecedores/delete", deleteFornecedor);

// Despesas
router.post("/despesas/add", createDespesa);
router.get("/despesas", getDespesas);
router.get("/despesas/:id", getDespesaById);
router.put("/despesas/update", updateDespesa);
router.delete("/despesas/delete", deleteDespesa);

// Categorias
router.get("/categorias", getCategorias);


// Formas de pagamento
router.get("/formas-pagto", getFormasPagto);

export default router;