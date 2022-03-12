package model.application.repositories;

import model.application.entities.Category;
import model.application.entities.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {

    Set<Provider> findByCategories(Set<Category> categories);
}
