# La Comanda App

### TP N°2 de Laboratorio de Programación 4. 
https://ivan-rojas.github.io/TP_Lab4_2c_2019/. - Iván Rojas. 

### - Descripción general -

## Cliente

### Ingresar

Para comenzar deberás iniciar sesión con tu cuenta actual. En caso de que todavía no poseas una, podés registrarte gratuitamente.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/login.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/register.PNG" />

---

### Carta y pedidos

Una vez ingresado como cliente, podrás revisar la carta y hacer un pedido seleccionando la comida que desea solicitar. Además, a la izquierda de la pantalla se encuentra tu mesa actual y el total actual de lo que pediste. En la derecha de la pantalla, se encuentran los filtros para encontrar lo que buscás más rápido.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/menu.PNG" />

---

Posteriormente podrás confirmar el pedido clickeando en "Ver pedido".

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/vieworder.PNG" />

---

### Menu principal

Por otra parte, también podés clickear en el panel superior derecho para desplegar el menú de opciones. Desde aquí podrás acceder al perfil y la pantalla de detalles de tu pedido.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/options.PNG" />

---

### Perfil

En este modulo podrás editar tus datos personales y modificar tu foto de perfil con solo dos clicks.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/profile.PNG" />

---

### Buscar y ver detalles del pedido

En este modulo podrás buscar tu pedido (a través del código provisionado cuando confirmas un pedido), ver el tiempo restante estimado, los precios individuales y totales. Y luego de comer, solicitar al mozo para realizar el pago.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/findorder1.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/findorder2.PNG" />

---

### Encuesta de satisfacción

Una vez pagado, se habilitará una encuesta para que nos cuentes tu experiencia.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/survey.PNG" />

---

## Staff

### Detalles generales

Cada sector de trabajadores tiene un color identificador, el cual se puede apreciar en la barra superior. Además, todo el personal cuenta con el módulo de perfil, donde pueden cambiar su información personal y un módulo de gestor de pedidos, el cual varía según las distintas comandas (sectores).

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/profile2.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/orders.PNG" />

---

### Mozo

El rol de mozo tiene la particularidad de que un pedido siempre va estar asignado a el, de principio a fin. Cuando un cliente pide algo de la carta, un mozo (en este caso, aleatorio) se vuelve el encargado del pedido. Si bien posteriormente van a haber distintos sectores trabajando con los items del pedido (ej: cocinero, bartender, cervecero), el siempre va a estar a cargo de su pedido. Llevará el control del mismo y una vez todo lo que se pidió esté preparado, el servirá el pedido a la mesa correspondiente. 
Por eso mismo, el gestor de pedidos del mozo cuenta con la opción de "Servir", que se utilizará solo cuando todo lo solicitado esté cocinado y preparado. 
Además, se pueden ver todos los detalles del pedido cuando seleccionamos uno.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/waiter1.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/waiter2.PNG" />

---

Por otra parte, el mozo puede gestionar los estados de las mesas, para lograr un control total de lo que sucede en el restaurante. 

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/waiter3.PNG" />

---

### Cocinero, bartender y cervecero

Estos tres roles solamente difieren en lo que preparan. Cada rol podrá ver sólo los pedidos donde tengan que trabajar. Por ejemplo, si un pedido es sólo una milanesa y un vino, el cervecero no podrá ver este pedido ya que no es de su interés.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/cook.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/bartender.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/brewer.PNG" />

---

Para gestionar los tiempos y la cocina, cada uno de estos sectores tiene acceso a todos los datos necesarios, junto con un menú para gestionar tiempos y avisar al mozo cuando algo está cocinado/preparado.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/b1.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/b2.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/b3.PNG" />

---

Una vez que el item seleccionado se pasa a "Listo para servir" y no queda ningún item más que le corresponda a él del pedido, se actualiza el estado para que el mozo esté informado de la situación.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/b4.PNG" />

---

Luego de que el mozo sirve el pedido, la mesa cambia de estado automáticamente, facilitando el trabajo de cada uno de los trabajadores. Si bien el mozo puede cambiar manualmente cada estado, el único del cual debe preocuparse es pasar de estado "Cliente pagando" a "Disponible", ya que el sabrá cuando el cliente abonó lo que le corresponde.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/w1.PNG" />

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/w2.PNG" />

---

## Socios

### Menu principal

El socio es el rol con más poder dentro de la aplicación. Desde el menú principal puede gestionar los roles de cada usuario, ingresando el email y el rol deseado. Además, puede descargar la facturación total de lo trabajado.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/s1.PNG" />

---

### Gestión de mesas como administrador

También, posee el módulo de gestión de mesas pero con la posibilidad de cerrar las mesas cuando sea necesario. Puede cambiar el estado de las mismas cuando lo desee.

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/s2.PNG" />

---

### Gestión de pedidos como administrador

Además, posee el módulo de gestión de pedidos con un control total del mismo. Con esto puede facilitar el trabajo del staff cuando se presente algún inconveniente (en la foto no hay pedidos activos).

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/s3.PNG" />

---

### Encuestas y estadísticas

El socio también tiene la posibilidad de poder visualizar las encuestas registradas por los clientes de forma histórica.
Cada encuesta está coloreada según el promedio de puntaje realizado sobre las cuatro categorías: el color es rojo si el promedio está por debajo del 4, el color es amarillo si es mayor o igual que 4 pero menor a 7 y por último verde, si el promedio es mayor a 7. 

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/s4.PNG" />

---

### Promedio de opiniones

Puede hacer click en una encuesta para ver más detalles. 

---
<img src="https://github.com/ivan-rojas/TP_Lab4_2c_2019/blob/master/documents/images/s5.PNG" />

---

Se puede ver el promedio del puntaje que consta de las 4 categorías, para tener una estadística más firme y sólida de la opinión del cliente.