package com.lixga.api.common.service;

import com.lixga.api.common.model.PageDTO;
import org.springframework.stereotype.Component;

@Component
public interface PageService {
    PageDTO getPageDTO(int toTalPageSize, int pageNo);

}
