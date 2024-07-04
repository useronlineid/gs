document.getElementById('saveImage').addEventListener('click', function() {
    const company = document.getElementById('company').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const date = document.getElementById('date').value || "-";
    const month = document.getElementById('month').value || "-";
    const year = document.getElementById('year').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/gs/blob/main/G.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 138px; left: 420px; color:#505050; font-size: 23px; font-weight: bold;">คดีหมายเลขดำที่    ผบ.๗๔๕/${year}</p>
                <p style="position: absolute; top: 165px; left: 411px; color:#505050; font-size: 23px; font-weight: bold;">คดีหมายเลขแดงที่   ผบ.๗๔๙/${year}</p>

                <p style="position: absolute; top: 173px; left: 152px; color:#505050; font-size: 40px; font-weight: bold;">ในพระปรมาภิไธยพระมหากษัตริย์</p>

                <p style="position: absolute; top: 250px; left: 215px; color:#505050; font-size: 23px; font-weight: bold;">
                วันที่  ${date}  เดือน  ${month}  พุทธศักราช ${year}
                </p>
                
                <p style="position: absolute; top: 282px; left: 290px; color:#505050; font-size: 23px; font-weight: bold;">
                ความแพ่ง
                </p>
                
                <p style="position: absolute; top: 348px; left: 120px; color:#505050; font-size: 23px; font-weight: bold;">
                ระหว่าง
                </p>
                
                <p style="position: absolute; top: 312px; left: 225px; color:#505050; font-size: 24px; font-weight: bold;">
                ${company}
                </p>
                
                <p style="position: absolute; top: 388px; left: 225px; color:#505050; font-size: 24px; font-weight: bold;">
                ${accountNumber}
                </p>
                
                <p style="position: absolute; top: 312px; left: 560px; color:#505050; font-size: 24px; font-weight: bold;">
                โจทก์
                </p>
                
                <p style="position: absolute; top: 388px; left: 560px; color:#505050; font-size: 24px; font-weight: bold;">
                จำเลย
                </p>
                
                <p style="position: absolute; top: 435px; left: 100px; color:#505050; font-size: 23px; font-weight: bold;width: 80%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ตามคำพิพากษาหรือคำสั่งของศาล ให้จำเลย มาขึ้นศาลเพื่อมาไกล่เกลี่ยที่ชั้นศาล เนื่องจากจำเลยทำกิจกรรมไม่เสร็จสิ้น ทำให้แผนคำสั่งซื้อเกิดความเสียหาย มีความผิด พรบ. คอมพิวเตอร์ มาตรา 10 และ พระราชบัญญัติคอมพิวเตอร์ (พ.ศ. 2550) มาตรา 14 กฎหมายได้กำหนดเกี่ยวกับความรับผิดชอบในการใช้งานคอมพิวเตอร์และข้อมูลสารสนเทศที่ถูกต้องตามกฎหมาย ต้องระวางโทษจำคุก ไม่เกิน 10 ปี หรือปรับไม่เกิน 200,000 บาท หรือทั้งจำทั้งปรับ
                </p>

                <p style="position: absolute; top: 640px; left: 150px; color:#505050; font-size: 24px; font-weight: bold;">
                ให้ ${accountNumber} จำเลย
                </p>
                
                <p style="position: absolute; top: 680px; left: 100px; color:#505050; font-size: 23px; font-weight: bold;width: 80%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ปฎิบัติตามคำพิพากษาหรือคำสั่งที่กล่าวแล้วภายในวันนี้  วันนับแต่วันที่ได้รับคำบังคับนี้เป็นต้นไป ถ้าไม่ปฎิบัติตามคำบังคับภายในระยะเวลาหรือเงื่อนไขดังกล่าวข้างต้นจะต้องถูกยึดทรัพย์ หรือถูกจับและจำขังดังที่บัญญัติไว้ในประมวลกฎหมายวิธีพิจารณาความแพ่ง 
                </p>
                
                <p style="position: absolute; top: 800px; left: 370px; color:#505050; font-size: 23px; font-weight: bold;">
                ...............................................ผู้พิพากษา<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( นาย นพดล มณีนาค )
                </p>

              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
