[![Flmngr file manager logo](https://flmngr.com/img/favicons/favicon-64x64.png)](https://flmngr.com)

# Flmngr standalone microservice

> Standalone microservice based on Node Express framework, which is ready to run and handle requests from Flmngr file manager

[![Flmngr file manager screenshot](https://flmngr.com/img/browsing.jpg)](https://flmngr.com)

[Flmngr file manager](https://flmngr.com) is used to upload and manage files and images. Can be a standalone file manager (React/Angular/etc. or custom JavaScript or TypeScript integrations) or work together with [TinyMCE](https://flmngr.com/doc/install-tinymce-plugin), [CKEditor&nbsp;4](https://flmngr.com/doc/install-ckeditor-plugin), [CKEditor&nbsp;5](https://flmngr.com/doc/install-ckeditor-5-plugin), [N1ED](https://n1ed.com), or any other JS components.

## How to run

After you fork/clone this repo, Flmngr microserver can be easily built with these commands:

```
npm i
npm run build
```

Then always run it with the command:

```
npm run start
```

All the options are located in `flmngr.conf` file.

Please read the [server configuration manual](https://flmngr.com/doc/install-file-manager-server-microservice) to know more about how to configure the backend, link it with Nginx, and add it to autostart on your server.

## Debugging

In case of any problem, we have a **very** detailed Question-Answer [debug manual](https://flmngr.com/doc/file-manager-debug).

## See Also

- [Flmngr](https://flmngr.com) - Flmngr file manager.
- [Install Flmngr standalone microservice](https://flmngr.com/doc/install-file-manager-server-microservice) - the detailed manual on how to install Node file manager on your Express server.
- [Flmngr codepens](https://codepen.io/flmngr/pens/public) - collection of JS samples on CodePen.
- [Flmngr API](https://flmngr.com/doc/api) - API of Flmngr client.
- [N1ED](https://n1ed.com) - a website content builder with Flmngr file manager aboard, also works as a plugin for CKEditor 4, TinyMCE, which has modules for different CMSs.  


## License

GNU Lesser General Public License v3; see LICENSE.txt