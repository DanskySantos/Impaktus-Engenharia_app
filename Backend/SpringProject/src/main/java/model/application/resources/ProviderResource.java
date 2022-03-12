package model.application.resources;

import model.application.entities.Category;
import model.application.entities.Provider;
import model.application.resources.dto.CategoryDto;
import model.application.resources.dto.ProviderDto;
import model.application.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/provider")
public class ProviderResource {
	
	@Autowired
	private ProviderService service;
	
//	@GetMapping
//	public ResponseEntity<List<Provider>> findAll() {
//		List <Provider> list = service.findAll();
//		return ResponseEntity.ok().body(list);
//	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Provider> findById(@PathVariable Long id) {
		Provider obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@GetMapping(value = "/findByCategory/{id}")
	public ResponseEntity<List<ProviderDto>> findByCategory(@PathVariable Long id) {
		Category category = new Category();
		category.setId(id);
		List<Provider> providers = service.findByCategories(Collections.singletonList(category));
		List<ProviderDto> listDto = providers.stream()
				.map(provider -> ProviderDto
						.builder()
						.categories(mapFromCategoryToDto(provider.getCategories()))
						.id(provider.getId())
						.name(provider.getName().toUpperCase(Locale.ROOT))
						.cnpj(provider.getCnpj())
						.email(provider.getEmail().toLowerCase(Locale.ROOT))
						.phone(provider.getPhone())
						.cellphone(provider.getCellphone())
						.address(provider.getAddress().toUpperCase(Locale.ROOT))
						.contact(provider.getContact())
						.build())
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

	public List<CategoryDto> mapFromCategoryToDto(Set<Category> categories) {
		return categories.stream()
				.map(category -> CategoryDto
						.builder()
						.id(category.getId())
						.name(category.getName())
						.build())
				.collect(Collectors.toList());
	}

	@PostMapping
	public Provider createProvider(@RequestBody Provider provider) {
		return service.save(provider);
	}

	@PutMapping
	public Provider updateProvider(@RequestBody Provider provider) {
		return service.save(provider);
	}
//
//	@DeleteMapping("/{id}")
//	public String deletePerson (@PathVariable Integer id) {
//		service.delete(id);
//		return id + " deletado ";
//	}
}
