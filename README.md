# false-deployment

Operational dashboard app for deployment testing.

The dashboard includes a live status chip that intentionally depends on a cross-origin request so
the browser surfaces a CORS-style failure during production use.