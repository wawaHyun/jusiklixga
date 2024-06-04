package com.lixga.api.common.security.serveice;

import com.lixga.api.common.component.Messenger;
import com.lixga.api.user.model.UserDto;

public interface AuthService {

    Messenger login(UserDto user);

    String createToken(UserDto user);

}