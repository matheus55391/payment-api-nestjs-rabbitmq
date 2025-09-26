# 🐳 Docker Services Configuration

Este arquivo configura todos os serviços necessários para executar a Payment API.

## 📋 Serviços Incluídos

### 🗄️ **PostgreSQL** (porta 5432)
- **Database**: `payment_api_db`
- **User**: `admin`
- **Password**: `admin`
- **Volume**: `postgres_data`

### 🚀 **Redis** (porta 6379)
- **Password**: `admin`
- **Persistence**: AOF habilitado
- **Volume**: `redis_data`

### 🐰 **RabbitMQ** (portas 5672, 15672)
- **User**: `admin`
- **Password**: `admin`
- **VHost**: `payment_vhost`
- **Management UI**: http://localhost:15672
- **Volumes**: `rabbitmq_data`, `rabbitmq_logs`

### 📧 **Mailhog** (portas 1025, 8025)
- **SMTP**: porta 1025
- **Web UI**: http://localhost:8025
- Para testes de email durante desenvolvimento

## 🚀 Como Usar

### Iniciar todos os serviços:
```bash
docker-compose up -d
```

### Verificar status dos serviços:
```bash
docker-compose ps
```

### Ver logs de um serviço específico:
```bash
docker-compose logs -f postgres
docker-compose logs -f redis
docker-compose logs -f rabbitmq
docker-compose logs -f mailhog
```

### Parar todos os serviços:
```bash
docker-compose down
```

### Parar e remover volumes (⚠️ CUIDADO - remove dados):
```bash
docker-compose down -v
```

## 🔗 URLs de Acesso

- **RabbitMQ Management**: http://localhost:15672 (admin/admin)
- **Mailhog Web UI**: http://localhost:8025
- **PostgreSQL**: localhost:5432 (admin/admin)
- **Redis**: localhost:6379 (password: admin)

## 📁 Volumes Persistentes

Os seguintes volumes são criados para persistir dados:
- `postgres_data`: Dados do PostgreSQL
- `redis_data`: Dados do Redis
- `rabbitmq_data`: Dados do RabbitMQ
- `rabbitmq_logs`: Logs do RabbitMQ

## 🌐 Network

Todos os serviços estão conectados à rede `payment_network` para comunicação interna.

## ⚙️ Configuração de Ambiente

O arquivo `.env` já está configurado com as credenciais de desenvolvimento:

```bash
# Exemplo de configurações
DATABASE_URL=postgresql://admin:admin@localhost:5432/payment_api_db
REDIS_URL=redis://:admin@localhost:6379
RABBITMQ_URL=amqp://admin:admin@localhost:5672/payment_vhost
```
