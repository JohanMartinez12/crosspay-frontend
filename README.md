# Crosspay Solutions – Fullstack App

Este proyecto fue desarrollado como parte de una **prueba técnica** para la construcción de un sistema de pagos con autenticación básica.  
La solución incluye un **Frontend en Angular** y un **Backend en .NET 7**, conectados a **SQL Server**.

---

## Tecnologías utilizadas

### Frontend
- **Angular 20** (standalone components, Angular CLI)  
- **TypeScript**  
- **Bootstrap 5** – estilos y responsive design  
- **HttpClient** – consumo de la API REST  
- **Interceptor de Autenticación** – inyección de credenciales en cada request  

### Backend
- **.NET 7 Web API**  
- **Entity Framework Core** – acceso a datos  
- **SQL Server** – base de datos relacional  
- **Swagger / Swashbuckle** – documentación interactiva de API  
- **Autenticación Básica (BasicAuth)** – protección de endpoints  
- **Clean Architecture (simplificada)** – separación de capas (Controllers, Services, Data, Models)  

---

## 📂 Estructura del proyecto

crosspay-fullstack/

├── crosspay-frontend/ # Proyecto Angular

│ ├── src/app/Components/ # Componentes (PaymentForm, AdminLogin, AdminDashboard)

│ ├── src/app/Services/ # Servicios (Auth, Transaction)

│ └── src/assets/ # Recursos estáticos (logo, imágenes, etc.)

│

├── crosspay-backend/ # Proyecto .NET

│ ├── Controllers/ # API Endpoints (TransactionController)

│ ├── Models/ # Entidades (Transactions)

│ ├── Services/ # Lógica de negocio (TransactionService)

│ ├── Data/ # DbContext y configuración EF

│ └── Program.cs # Configuración inicial

---

## Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/crosspay-fullstack.git
cd crosspay-fullstack
```

### 2. Backend (API .NET)

```bash
cd crosspay-backend
dotnet restore
dotnet build
```
Configurar la cadena de conexión

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=CrosspayDB;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```
### 3. Frontend (Angular)

```bash
cd crosspay-frontend
npm install
ng serve -o
```
## Funcionalidades implementadas

## Frontend

* Formulario de pago con envío de transacciones.

* Login de administrador con autenticación básica.

* Dashboard de administración que lista transacciones desde el backend.

## Backend

* POST /api/transaction → Crear nueva transacción.

* GET /api/transaction → Listar todas las transacciones.

* Validaciones de monto y campos requeridos.

* Autenticación básica (admin / Pass1234!).

## Autor

Desarrollado por Johan Martínez
Prueba técnica – Crosspay Solutions – 2025











