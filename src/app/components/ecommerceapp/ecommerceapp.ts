import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecommerceapp',
  imports: [FormsModule],
  templateUrl: './ecommerceapp.html',
  styleUrl: './ecommerceapp.css'
})
export class Ecommerceapp {

  selectedCategory: string ='';
  searchText: string = '';
  productList: IPorduct[] = [
    {
      productShortName: 'iPhone 15',
      longName: 'Apple iPhone 15 Pro 128GB - Titanium Gray',
      categoryName: 'Electronics',
      desscription:
        'Experience the latest iPhone with A17 Pro chip, dynamic island, and an advanced camera system.',
      sku: 'ELEC-IP15-128',
      price: 124999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: true,
    },
    {
      productShortName: 'iPhone 15',
      longName: 'Apple iPhone 15 Pro 128GB - Titanium Gray',
      categoryName: 'Electronics',
      desscription:
        'Experience the latest iPhone with A17 Pro chip, dynamic island, and an advanced camera system.',
      sku: 'ELEC-IP15-128',
      price: 124999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: true,
    },
    {
      productShortName: 'iPhone 15',
      longName: 'Apple iPhone 15 Pro 128GB - Titanium Gray',
      categoryName: 'Electronics',
      desscription:
        'Experience the latest iPhone with A17 Pro chip, dynamic island, and an advanced camera system.',
      sku: 'ELEC-IP15-128',
      price: 124999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: true,
    },
    {
      productShortName: 'Nike Air Max',
      longName: 'Nike Air Max 270 Running Shoes for Men',
      categoryName: 'Fashion',
      desscription:
        'Lightweight running shoes with breathable mesh and superior cushioning for all-day comfort.',
      sku: 'FASH-NIKE-270',
      price: 8999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: true,
    },
    {
      productShortName: 'Samsung Smart TV',
      longName: 'Samsung 55-Inch 4K Ultra HD Smart LED TV',
      categoryName: 'Home Appliances',
      desscription:
        'Enjoy stunning 4K resolution with built-in apps like Netflix, Prime Video, and YouTube.',
      sku: 'HOME-SAMS-55TV',
      price: 54999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/266945_23-surf-excel-easy-wash-detergent-powder.jpg',
      isInStock: false,
    },
    {
      productShortName: 'Dell XPS 13',
      longName: 'Dell XPS 13 Laptop (Intel i7, 16GB RAM, 512GB SSD)',
      categoryName: 'Electronics',
      desscription:
        'Powerful ultrabook with premium design, InfinityEdge display, and long battery life.',
      sku: 'ELEC-DELL-X13',
      price: 129999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/266945_23-surf-excel-easy-wash-detergent-powder.jpg',
      isInStock: true,
    },
    {
      productShortName: 'Fossil Gen 6',
      longName: 'Fossil Gen 6 Smartwatch with AMOLED Display',
      categoryName: 'Fashion',
      desscription:
        'Smartwatch with heart rate monitoring, sleep tracking, and smartphone notifications.',
      sku: 'FASH-FOS-GEN6',
      price: 18999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: true,
    },
    {
      productShortName: 'Philips Air Fryer',
      longName: 'Philips Daily Collection Air Fryer HD9200/90',
      categoryName: 'Home Appliances',
      desscription:
        'Healthy cooking with up to 90% less fat using Rapid Air technology.',
      sku: 'HOME-PHIL-9200',
      price: 8999,
      thumbnailImage:
        'https://www.bbassets.com/media/uploads/p/l/40202338_5-pampers-baby-wipes-with-aloe.jpg',
      isInStock: false,
    },
  ];

  addToCartList: IPorduct[]=[];

  filteredProductList : IPorduct[] = [];

  constructor() {
    this.filteredProductList = this.productList;
  }
  //products = signal<IPorduct[]>([])

  onCategoryChanges() {
    this.filteredProductList =  this.productList.filter(m=>m.categoryName == this.selectedCategory);
  }

  onSearch(searchVal: string) {
    
    this.filteredProductList = this.productList.filter(m=>m.productShortName.toLowerCase().startsWith(searchVal.toLowerCase()));
  }


  addToCart(item: IPorduct) {
    
    const isExist =  this.addToCartList.find(m=>m.productShortName == item.productShortName);
    if(isExist != undefined) {
      alert("Product Alredy Added to cart")
    } else {
       this.addToCartList.unshift(item)
       alert('product Added to Cart')
    }
   
  }
}

interface IPorduct {
  productShortName: string;
  longName: string;
  categoryName: string;
  desscription: string;
  sku: string;
  price: number;
  thumbnailImage: string;
  isInStock: boolean;
}
