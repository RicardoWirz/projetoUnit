package com.ricardo.backend.servicos;

import java.util.List;
import java.util.Optional;

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
	
	public Cliente clientePorID(Integer id) {
		Optional<Cliente> cliente = clienteRepositorio.findById(id);
		return cliente.orElse(null) ;
	}

	public Cliente inserirCliente(Cliente cliente) {
		// Garante que o id vai ser gerado automaticamente pelo banco de dados
		cliente.setId(null);
		return clienteRepositorio.save(cliente);
	}

	public Cliente atualizarCliente(Cliente cliente) {
		Cliente dadosAtualizados = clientePorID(cliente.getId());
		dadosAtualizados.setApelido(cliente.getApelido());
		dadosAtualizados.setCpf(cliente.getCpf());
		dadosAtualizados.setDataNascimento(cliente.getDataNascimento());
		dadosAtualizados.setEmail(cliente.getEmail());
		dadosAtualizados.setNome(cliente.getNome());
		dadosAtualizados.setNomeSocial(cliente.getNomeSocial());
		dadosAtualizados.setSexo(cliente.getSexo());
		dadosAtualizados.setTelefone(cliente.getTelefone());
		return clienteRepositorio.save(dadosAtualizados);
	}

	public void deletarCliente(Integer id) {
		clienteRepositorio.deleteById(id);
	}

}
