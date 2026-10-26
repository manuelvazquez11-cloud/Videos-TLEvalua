# Agenda Integral

App para iPhone (web app instalable) para organizar en un solo lugar:

- **Personal**: esposa, hijos, vehículos y casas.
- **Inbursa**: Relaciones Institucionales y el equipo a cargo.
- **TL Guerrero Consultores**: PLD para OSFL, contabilidad, jurídico y clientes.

## Qué hace

- **Hoy**: vencidas, pendientes del día, próximos 7 días y la carga del equipo.
- **Áreas**: actividades por área y categoría; en Personal, fichas de cada vehículo y casa.
- **Equipo**: alta, edición y baja de personas; carga de trabajo de cada una (Disponible / Ocupado / Saturado) y asignación de actividades.
- **Agenda**: calendario de 5 semanas con las actividades de cada día.
- **Actividades**: responsable, fecha y hora, prioridad, recordatorio, repetición (diaria, laboral, semanal, quincenal, mensual, bimestral, anual) y notas. Al completar una actividad repetitiva se programa la siguiente.
- **Recordatorios**: notificaciones mientras la app está abierta o en segundo plano, y botón **Enviar a Calendario** (.ics con alarma) para avisos garantizados del Calendario del iPhone.
- **Avisos al equipo (manuales)**: cada persona tiene correo y celular. Desde una actividad asignada (botón **Notificar**) o desde la ficha de la persona (**Enviar resumen de pendientes**) se prepara un mensaje formal, editable, con la firma del área (Banco Inbursa o TL Guerrero Consultores). Al elegir **Correo**, **Mensaje** o **WhatsApp** se abre esa app con el texto listo; nada se envía de forma automática. La app registra el último aviso de cada actividad.
- **Mi firma** (en Ajustes): nombre y cargos que aparecen al final de los mensajes.
- **Respaldo**: exportar e importar todos los datos en JSON.

Los datos se guardan solo en el dispositivo (localStorage). No hay servidor.

### Cómo se calcula la carga

Se suman las actividades abiertas de los próximos 14 días: alta = 3 pts, media = 2, baja = 1, y una vencida suma 1 extra. El total se compara contra la capacidad de la persona (12 pts por defecto, editable).
Menos de 70 % = Disponible, 70–100 % = Ocupado, más de 100 % = Saturado.

## Instalar en el iPhone

1. Publica la carpeta `agenda/` en cualquier hosting HTTPS. Con GitHub Pages:
   *Settings → Pages → Deploy from a branch*, elige la rama y la carpeta raíz; la app queda en `https://<usuario>.github.io/<repo>/agenda/`.
2. Abre la dirección en **Safari** en el iPhone.
3. Toca **Compartir → Agregar a pantalla de inicio**.
4. Abre la app desde el ícono y en **Ajustes** toca **Activar notificaciones** (requiere iOS 16.4 o posterior).

## Archivos

- `index.html`: la app completa (HTML, CSS y JS sin dependencias).
- `manifest.webmanifest`, `sw.js`, `icons/`: instalación y uso sin conexión.
