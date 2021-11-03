# FE-CaldAr

## 🚀 ¿Que es Redux? - Resumen.

Permite manejar el 'State' de una aplicacion, para que sea mas facil mantener conforme va creciendo. 
Tambien te ayuda a manejar los datos, conforme el Usuario realiza diferentes acciones.

## Caracteristicas de Redux.
- Solo se tiene un state principal.
- El State cambia de acuerdo a lo que sucede en la interfaz de Usuario.
- Solo ciertas funciones cambian el State.
- El Usuario es el que utiliza estas funciones y cambia el state.
- Solo se realiza un cambio a la vez.

## Principios de Redux.

- Solo existe un Store con todo el State de la Aplicacion.
- Los Componentes / Vistas no modifican el State directamente.
- El State modifica por medio de funciones.
- Store: Contiene el State (1 por Aplicacion).
- Dispatch: Ejecuta una Accion que actualizara el State.
- Action: Son Objetos (js), tienen un Tipo y un Payload (Datos).
- Subscribe: Similar a un Event Listener para el State.
- Reducers: Funciones, saben que hacer con las Acciones y el Payload. 