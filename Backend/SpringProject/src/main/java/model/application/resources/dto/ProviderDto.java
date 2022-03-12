package model.application.resources.dto;

import lombok.*;
import model.application.entities.Provider;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ProviderDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String cnpj;
    private String email;
    private String phone;
    private String cellphone;
    private String address;
    private String contact;

    private List<CategoryDto> categories = new ArrayList<>();

    public ProviderDto(Provider provider) {
        id = provider.getId();
        name = provider.getName();
        cnpj =  provider.getCnpj();
        email = provider.getEmail();
        phone = provider.getPhone();
        cellphone = provider.getCellphone();
        address = provider.getAddress();
        contact = provider.getContact();
    }

}
