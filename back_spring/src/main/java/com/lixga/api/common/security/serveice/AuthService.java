package com.lixga.api.common.security.serveice;

import com.lixga.api.common.component.security.Messenger;
import com.lixga.api.user.domain.UserDto;

public interface AuthService {

    Messenger login(UserDto user);

    String createToken(UserDto user);

}