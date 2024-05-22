package com.lixga.api.common.service;

import com.lixga.api.common.component.Messenger;

public interface CommandService<T> {

Messenger save(T t);
Messenger deleteById(Long id);
Messenger modify(T t);
}
