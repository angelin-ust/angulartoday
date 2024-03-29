package com.ust.rest.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

import com.ust.rest.resource.Product;
import com.ust.rest.services.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/product/api.2.0")
public class ProductResource {

	//Product is in repository
	@Autowired
	ProductService service;
	//if autowried anee automatically the object create cheyum
	
	
//	//URL     /product/api.1.0/retrieve/{productId}
	@GetMapping
	@RequestMapping("/retrieve/{productId}")
	public Product fetchProduct(@PathVariable long productId)
	{
		return service.getProduct(productId);
	}
//	
//	
	
	@GetMapping
	public String test() {
		return "test() callled......";
	}
	
	
	@CrossOrigin
	@GetMapping
	@RequestMapping("/retrieve/all")
	public List<Product> fetchProduct()
	{
		return service.getProduct();
	}
	
	
	@PostMapping
	@RequestMapping(value="/create",
	consumes=MediaType.APPLICATION_JSON_VALUE,
	produces=MediaType.APPLICATION_JSON_VALUE)
	
	
	//Accepting the json and producing json
	public ResponseEntity<?>addProduct(@RequestBody Product product){
		
		
		
		
		Exception exception =null;
		Product tempProduct=null;
		try {
			tempProduct=service.add(product);
			
		}catch(Exception e) {
			exception =e;
		}
		if(tempProduct!=null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(tempProduct);
			
		}
		else
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception);
			
		}
//		boolean result=service.add(product);
//		if(result) {
//		return	ResponseEntity.status(HttpStatus.CREATED).body(true);
//		}
//		else
//			return ResponseEntity.status(HttpStatus.CREATED).body(false);		
	}
	
	//postman ill post akkum get matte pinne body ill json object{product id .....} edum 
	//pinne raw(option) akum pinee text(dropdown)->json
	
	//consumes=MediaType.APPLICATION_JSON_VALUE,
	//produces=MediaType.APPLICATION_JSON_VALUE means nammal enter cheyumpol
	//ath json ayiiikondumm
	
	@PutMapping
	@RequestMapping(value="/update/{id}",
	consumes=MediaType.APPLICATION_JSON_VALUE,
	produces=MediaType.APPLICATION_JSON_VALUE)
	
	public Product updateProduct(@PathVariable long id,@RequestBody Product product)
	{
		return service.updateProduct(product);
	}
	
	//````````````````````````````````@CrossOrigin(origins= {"localhost:4200"},method= {DELETE,)
    @DeleteMapping
	@RequestMapping(value="delete/{productId}")
	public void delete(@PathVariable long productId)
	{
		service.deleteProduct(productId);
	}
	
	
}
