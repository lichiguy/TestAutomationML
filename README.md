# TestAutomationML

Para correr el programa hay que seguir estas instrucciones:

1. Clonar el repositorio con el comando: 
    git clone "url del repositorio"

2. Opción A:
    Abrir una terminal en la carpeta del proyecto y escribir el comando: 
        npm install 
    
   Opcion B:
    Abrir la carpeta con VS Code y abrir una terminal y escribir el comando:
        npm install

3. Ejecutar el comando:
    npx playwright test ps4Test.spec.js

    Esto ejecutará el test en los 3 exploradores en paralelo sin abrir ninguna ventana, en caso de querer ejecutar el test en un solo explorador ejecutar el siguiente comando:
    npx playwright test ps4Test.spec.js --project="nombre del explorador" 
    "firefox", "chromium", "webkit"

    Para visualizar la ventana en la que se realiza el test ejecutar el siguiente comando:
    npx playwright test ps4Test.spec.js --project="nombre del explorador" --headed

    Finalmente, si se quiere ver el paso a paso de la ejecucipon ejecutar el siguiente comando:
    npx playwright test ps4Test.spec.js --project="nombre del explorador" --headed --debug

4. Para generar el reporte correspondiente con las imágemes del paso a paso de la prueba de automatización, al finalizar la ejecución escribir el siguiente comando:
    npx playwright show-report