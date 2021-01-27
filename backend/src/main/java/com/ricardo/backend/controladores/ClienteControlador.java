package com.ricardo.backend.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ricardo.backend.entidades.Cliente;
import com.ricardo.backend.servicos.ClienteServico;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/clientes")
public class ClienteControlador {
	
	// Injeção da camada de serviço
	@Autowired
	private ClienteServico clienteServico;
	
	// Método responsável por recuperar a lista de todos os clientes no banco de dados
	@GetMapping
	public ResponseEntity<List<Cliente>> listarClientes(){
		// Lista de clientes recuperados do banco de dados
		List<Cliente> listaClientes = clienteServico.listarClientes();
		// Retorna uma resposta HTTP com o código 200 (OK) e insere no corpo da página a lista de clientes
		return ResponseEntity.ok().body(listaClientes);
	}
	
	// Método responsável por recuperar um cliente pelo id
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Cliente>> clientePorId(@PathVariable Integer id){
		Optional<Cliente> cliente = clienteServico.clientePorID(id);
		return ResponseEntity.ok().body(cliente);
	}
}
