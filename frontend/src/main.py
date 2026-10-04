from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(title="HomeWork11 CRUD")

# Настраиваем CORS для взаимодействия с фронтендом
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_methods=["*"],
)


# Модель Pydantic для создания нового товара
class ProductCreate(BaseModel):
    name: str

# Модель Pydantic для представления товаров
class Product(BaseModel):
    id: int
    name: str
    quantity: int = 1

# Простая "база данных" в памяти для хранения товаров
products_db: list[Product] = [
    Product(id=1, name="Наушники", quantity = 1),
    Product(id=2, name="Ноутбук", quantity = 3),
    Product(id=3, name="Диван", quantity = 2),
]


# Вспомогательная функция для генерации следующего ID
def next_id() -> int:
    return max((m.id for m in products_db), default=0) + 1


# Вспомогательная функция для получения индекса сообщения из списка (БД) по ID
def get_index(product_id: int) -> int:
    for i, p in enumerate(products_db):
        if p.id == product_id:
            return i
    return -1


# Эндпоинт для получения списка товаров
@app.get("/products")
async def get_products() -> list[Product]:
    return products_db

# Эндпоинт для создания товара
@app.post("/products", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductCreate) -> Product:
    p = Product(id=next_id(), name=payload.name, quantity=1)
    products_db.append(p)
    return p

# Эндпоинт для удаления товара
@app.delete("/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(product_id: int):
    # Ищем индекс товара по ID
    idx = get_index(product_id)
    # Если сообщение не найдено, возвращаем ошибку 404
    if idx < 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found")
    # Удаляем товар из базы данных
    products_db.pop(idx)