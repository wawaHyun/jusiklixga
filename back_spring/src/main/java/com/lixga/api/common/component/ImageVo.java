package com.lixga.api.common.component;

import org.springframework.stereotype.Component;
import lombok.*;

@Component
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageVo {
    private Long imageId;
    String name;
    Long lastModified;
    Long lastModifiedDate;
    String type;
    String webkitRelativePath;
    Long size;

}
