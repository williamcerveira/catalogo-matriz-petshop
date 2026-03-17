import { Product, Service } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ração Premium Cães Adultos 15kg',
    price: 189.90,
    category: 'Rações',
    animalType: 'Cachorros',
    brand: 'Royal Canin',
    description: 'Ração de alta qualidade para cães adultos de todas as raças. Rica em proteínas e vitaminas essenciais.',
    image: '/images/product_dog_food.png',
    sku: 'RAC-001',
    technicalInfo: 'Proteína Bruta: 25%, Extrato Etéreo: 12%, Matéria Fibrosa: 3.5%',
    featured: true
  },
  {
    id: '2',
    name: 'Ração Gourmet Gatos Castrados 3kg',
    price: 85.50,
    category: 'Rações',
    animalType: 'Gatos',
    brand: 'Purina',
    description: 'Sabor irresistível e controle de peso ideal para gatos castrados.',
    image: '/images/product_cat_food.png',
    sku: 'RAC-002',
    technicalInfo: 'Proteína Bruta: 32%, Extrato Etéreo: 10%',
    featured: true
  },
  {
    id: '3',
    name: 'Brinquedo Osso de Borracha Resistente',
    price: 35.00,
    category: 'Brinquedos',
    animalType: 'Cachorros',
    brand: 'Kong',
    description: 'Ideal para cães que adoram morder. Material atóxico e durável.',
    image: '/images/product_rubber_bone.png',
    sku: 'BRQ-001'
  },
  {
    id: '4',
    name: 'Arranhador Torre para Gatos',
    price: 249.90,
    category: 'Acessórios',
    animalType: 'Gatos',
    brand: 'Petz',
    description: 'Diversão e conforto para seu gato. Com várias plataformas e sisal para arranhar.',
    image: '/images/product_cat_tower.png',
    sku: 'ACS-001',
    featured: true
  },
  {
    id: '5',
    name: 'Shampoo Neutro para Pets 500ml',
    price: 42.00,
    category: 'Higiene',
    animalType: 'Cachorros',
    brand: 'Pet Society',
    description: 'Limpeza suave sem irritar a pele do seu pet. Fragrância agradável.',
    image: '/images/product_shampoo.png',
    sku: 'HIG-001'
  },
  {
    id: '6',
    name: 'Coleira Ajustável com Guia 1.2m',
    price: 59.90,
    category: 'Acessórios',
    animalType: 'Cachorros',
    brand: 'Zee.Dog',
    description: 'Segurança e estilo para os passeios. Disponível em várias cores.',
    image: '/images/product_collar.png',
    sku: 'ACS-002'
  },
  {
    id: '7',
    name: 'Bolinha de Tênis para Cães (Pack 3)',
    price: 25.00,
    category: 'Brinquedos',
    animalType: 'Cachorros',
    brand: 'Petz',
    description: 'O clássico que nunca falha. Horas de diversão garantida.',
    image: '/images/product_tennis_balls.png',
    sku: 'BRQ-002'
  },
  {
    id: '8',
    name: 'Cama Nuvem Ultra Macia G',
    price: 159.00,
    category: 'Acessórios',
    animalType: 'Gatos',
    brand: 'Petz',
    description: 'O descanso que seu pet merece. Formato anatômico e tecido premium.',
    image: '/images/product_pet_bed.png',
    sku: 'ACS-003',
    featured: true
  },
  {
    id: '9',
    name: 'Petisco Natural de Frango 100g',
    price: 18.50,
    category: 'Rações',
    animalType: 'Cachorros',
    brand: 'Premier',
    description: 'Livre de corantes e conservantes. O agrado perfeito.',
    image: '/images/product_chicken_treats.png',
    sku: 'RAC-003'
  },
  {
    id: '10',
    name: 'Escova de Dentes para Cães',
    price: 15.90,
    category: 'Higiene',
    animalType: 'Cachorros',
    brand: 'Pet Society',
    description: 'Mantenha a saúde bucal do seu melhor amigo em dia.',
    image: '/images/product_dog_toothbrush.png',
    sku: 'HIG-002'
  },
  {
    id: '11',
    name: 'Comedouro Inox Antiderrapante',
    price: 45.00,
    category: 'Acessórios',
    animalType: 'Cachorros',
    brand: 'Petz',
    description: 'Higiênico e durável. Base de borracha para não escorregar.',
    image: '/images/product_steel_bowl.png',
    sku: 'ACS-004'
  },
  {
    id: '12',
    name: 'Varinha com Penas para Gatos',
    price: 12.00,
    category: 'Brinquedos',
    animalType: 'Gatos',
    brand: 'Petz',
    description: 'Estimule o instinto caçador do seu felino.',
    image: '/images/product_feather_wand.png',
    sku: 'BRQ-003'
  },
  {
    id: '13',
    name: 'Tapete Higiênico (30 unidades)',
    price: 79.90,
    category: 'Higiene',
    animalType: 'Cachorros',
    brand: 'Pet Society',
    description: 'Alta absorção e controle de odores para o dia a dia.',
    image: '/images/product_hygiene_pad.png',
    sku: 'HIG-003'
  },
  {
    id: '14',
    name: 'Caixa de Transporte Luxo M',
    price: 199.00,
    category: 'Acessórios',
    animalType: 'Cachorros',
    brand: 'Petz',
    description: 'Segurança total para viagens e idas ao veterinário.',
    image: '/images/product_transport_crate.png',
    sku: 'ACS-005'
  },
  {
    id: '15',
    name: 'Ração Especial Peixes Ornamentais',
    price: 22.00,
    category: 'Rações',
    animalType: 'Peixes',
    brand: 'Poytara',
    description: 'Nutrição completa para realçar as cores dos seus peixes.',
    image: 'https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&q=80&w=800',
    sku: 'RAC-004'
  }
];

export const services: Service[] = [
  {
    id: 's1',
    name: 'Banho e Tosa',
    description: 'Cuidado completo com a higiene e estética do seu pet. Utilizamos produtos premium.',
    priceBase: 80.00,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    name: 'Consulta Veterinária',
    description: 'Atendimento especializado para garantir a saúde e bem-estar do seu amigo.',
    priceBase: 150.00,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    name: 'Hotelzinho Pet',
    description: 'Hospedagem com carinho, segurança e muita diversão enquanto você viaja.',
    priceBase: 120.00,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    name: 'Adestramento',
    description: 'Educação positiva para melhorar o comportamento e a relação com seu pet.',
    priceBase: 200.00,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800'
  }
];
