function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // 設定海草的數量
  let seaweedCount = 30;
  
  // 繪製多條海草
  for (let j = 0; j < seaweedCount; j++) {
    // 計算線條的起始 x 座標
    let x = j * (width / seaweedCount);
    
    // 計算線條的起始 y 座標
    let y = height;
    
    // 設定海草的節點數量
    let segments = 44; // 確保總高度為 220
    
    // 設定每個節點的長度
    let segmentLength = 5; // 每個節點的長度較短，以控制總高度
    
    // 設定顏色，並設置透明度為 65%
    stroke(50 + j * 10, 100 + j * 5, 150 + j * 3, 165); // 透明度 65% 對應 255 * 0.65 = 165
    
    // 設定線條粗細
    strokeWeight(75);
    
    // 繪製從 y 軸開始延伸的搖擺直線
    let totalHeight = 0;
    for (let i = 0; i < segments; i++) {
      // 計算每個節點的擺動
      let angle = sin(frameCount * 0.05 + i * 0.5) * 0.5;
      
      // 計算下一個節點的位置
      let x2 = x + sin(angle) * segmentLength;
      let y2 = y - cos(angle) * segmentLength;
      
      // 繪製節點之間的線條
      line(x, y, x2, y2);
      
      // 更新 x 和 y 座標
      x = x2;
      y = y2;
      
      // 更新總高度
      totalHeight += segmentLength;
      
      // 如果總高度達到 220，則停止繪製
      if (totalHeight >= 220) {
        break;
      }
    }
    
    // 確保海草的總高度為 220
    if (totalHeight < 220) {
      let remainingHeight = 220 - totalHeight;
      let x2 = x;
      let y2 = y - remainingHeight;
      line(x, y, x2, y2);
    }
  }
}
