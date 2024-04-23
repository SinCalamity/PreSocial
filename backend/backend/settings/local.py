import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve() .parent.parent.parent 


STATIC_URL = '/static/'

STATICFILES_DIRS = [
    BASE_DIR / "static_my_project",
    BASE_DIR / "templates" / "build"]

STATIC_ROOT = os.path.join(BASE_DIR, "static", "static_root",)

MEDIA_URL = '/media/',

MEDIA_ROOT = os.path.join(BASE_DIR, "static", "media_root")

CORS_REPLACE_HTTPS_REFERER      = False
HOST_SCHEME                     = "http://"
SECURE_PROXY_SSL_HEADER         = None
SECURE_SSL_REDIRECT             = False
SESSION_COOKIE_SECURE           = False
CSRF_COOKIE_SECURE              = False
SECURE_HSTS_SECONDS             = None
SECURE_HSTS_INCLUDE_SUBDOMAINS  = False
SECURE_FRAME_DENY               = False
