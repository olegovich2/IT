const shopList = {
    '09360374': {
      name: 'Cardigan',
      price: 49.90,
      count: 1
    },
    '02929990': {
      name: 'Coat',
      price: 99.90,
      count: 0
    },
    '01827744': {
      name: 'Dressing gown',
      price: 55.00,
      count: 1
    },
    '18288828': {
      name: 'Dress',
      price: 70.90,
      count: 4
    },
    '08093063': {
      name: 'Jacket',
      price: 86.70,
      count: 5
    },
    '09282888': {
      name: 'Leggings',
      price: 55.00,
      count: 0
    }
  };

  let table =document.querySelector('table');

  for( let key in shopList) {
    let tr = document.createElement('tr');
    if (shopList[key].count == 0) {
        shopList[key].count = 'out of stock';
    } else {
        shopList[key].count; 
    }
    tr.innerHTML = `<td>${key}</td> <td>${shopList[key].name}</td> <td>${shopList[key].price}</td> <td>${shopList[key].count}</td>`;
    table.appendChild(tr);
  }