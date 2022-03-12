package model.application.resources;

import model.application.entities.Category;
import model.application.resources.dto.CategoryDto;
import model.application.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/category")
public class CategoryResource {
	
	@Autowired
	private CategoryService service;

	@GetMapping(value = "/findAll")
	public ResponseEntity<List<CategoryDto>> findAll() {
		List<Category> list = service.findAll();
		List<CategoryDto> listDto = list.stream()
				.map(category ->
						CategoryDto.builder()
								.id(category.getId())
								.name(category.getName())
								.build())
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

//	@GetMapping(value = "/{id}")
//	public ResponseEntity<CategoryDto> findById(@PathVariable Long id) {
//		Optional<Category> obj = service.findById(id);
//		return ResponseEntity.ok().body(obj);
//	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Category> findById(@PathVariable Long id) {
		Category obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public Category createCategory(@RequestBody Category category) {
		return service.save(category);
	}

	@PutMapping
	public Category updateCategory(@RequestBody Category category) {
		return service.save(category);
	}

//	@DeleteMapping("/{id}")
//	public String deletePerson (@PathVariable Integer id) {
//		service.delete(id);
//		return id + " deletado ";
//	}
}
