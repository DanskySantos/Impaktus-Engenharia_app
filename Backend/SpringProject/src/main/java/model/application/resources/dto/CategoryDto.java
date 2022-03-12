package model.application.resources.dto;

import lombok.*;
import model.application.entities.Category;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    public CategoryDto (Category category) {
        id = category.getId();
        name = category.getName();
    }

    //private List<CategoryDto> categories = new ArrayList<>();
}
