var canvas=new fabric.Canvas("myCanvas");
by=1;
bx=1;
bw = 350;
bh= 430;
var b="";
function newimage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
        b=Img;
        b.scaleToWidth(350);
        b.scaleToHeight(430);
        b.set({
            top: by,
            left: bx
        });
        canvas.add(b);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed = e.keyCode;
	if(keyPressed == '82')
	{
		newimage("rr1.png");
	}
	if(keyPressed == '71')
	{
		bx = 200;
		newimage("gr.png");
	}
	
	if(keyPressed == '89')
	{
		bx =350;
		newimage("yr.png");
	}
	if(keyPressed == '80')
	{
		bx = 600;
		newimage("pr.png");
	}
	if(keyPressed == '66')
	{
		bx = 700;
		newimage("br.png");
	}
}