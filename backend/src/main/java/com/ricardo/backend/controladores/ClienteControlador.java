package com.ricardo.backend.controladores;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	public ResponseEntity<Cliente> clientePorId(@PathVariable Integer id){
		Cliente cliente = clienteServico.clientePorID(id);
		return ResponseEntity.ok().body(cliente);
	}
	
	// Método responsável por criar um cliente no banco de dados
	@PostMapping
	public ResponseEntity<Cliente> inserirCliente(@RequestBody Cliente cliente) {
		// Passa para camada de serviço os dados recebidos via POST
		cliente = clienteServico.inserirCliente(cliente);
		// Cria a url para retornar o caminho do novo cliente criado
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cliente.getId()).toUri();
		// Retorna uma resposta HTTP com o código 201 (CREATED) e insere no corpo da página o cliente criado 
		return ResponseEntity.created(uri).body(cliente);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Cliente> atualizarCliente(@PathVariable Integer id, @RequestBody Cliente cliente) {
		cliente.setId(id);
		cliente = clienteServico.atualizarCliente(cliente);
		// Retorna uma resposta HTTP com o código 200 (OK), atualiza o cliente no banco e insere no corpo da página os dados atualizados
		return ResponseEntity.ok().body(cliente);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletarCliente(@PathVariable Integer id) {
		clienteServico.deletarCliente(id);
		// Retorna uma resposta sem conteúdo e o cliente é deletado
		return ResponseEntity.noContent().build();
	}
}
