import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve() .parent.parent.parent 


STATIC_URL = 'static/'

STATICFILES_DIRS = [BASE_DIR / "static_my_project", ]

STATIC_ROOT = os.path.join(BASE_DIR, "static_cdn" , "static_root")

MEDIA_URL = 'media/'

MEDIA_ROOT = os.path.join(BASE_DIR, "static_cdn," "media_root")

