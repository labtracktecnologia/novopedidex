== Como instalar ==
- instale o docker e o docker-compose no seu PC
- vá para a pasta do projeto pelo terminal
- rode o comando:
```
docker-compose up -d
```
** Caso seu computador precise de permissão de root para rodar o docker utilize o sudo ou abra um terminal com permissão de administrador (caso windows).
** Serão necessárias duas portas para funcionar: 3000 e 8080, caso seu computador já esteja usando essas portas, você pode trocar no arquivo docker-compose.yml nos seus respectivos serviços.
