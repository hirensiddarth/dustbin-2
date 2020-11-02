class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
			this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.image=loadImage("dustbin.png")
			this.body=Bodies.rectangle(x, y, w, h , options);
			World.add(world, this.body);
		
		
 		

	}
	display()
	{
			
			var dPos=this.body.position;		
            
			push()
			translate(dPos.x, dPos.y);
			imageMode(CENTER);
			
			fill("red")
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}