import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { LanguageService } from '../Services/Languages/language.service';
import { inject } from '@angular/core';

export const languageInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const languageService = inject(LanguageService);

  const modifiedReq = req.clone({
    setHeaders: {
      'Accept-Language': languageService.getUserLanguage(),
    },
  });

  return next(modifiedReq);
};
