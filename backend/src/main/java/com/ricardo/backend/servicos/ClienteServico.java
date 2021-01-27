package com.ricardo.backend.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ricardo.backend.entidades.Cliente;
import com.ricardo.backend.repositorios.ClienteRepositorio;

// Camada que contém as lógicas do que vai ser recuperado do banco de dados
@Service
public class ClienteServico {

	// Injeção da camada de repositório
	@Autowired
	private ClienteRepositorio clienteRepositorio;
	
	public List<Cliente> listarClientes() {
		return clienteRepositorio.findAll();
	}

}
