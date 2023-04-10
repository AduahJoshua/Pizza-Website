const Caro = () => {
    return (
      <div>
      

<div class="container-fluid">
	<div class="row">
		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
		
			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>
			</ol>

			
			<div class="carousel-inner  banner-size" role="listbox">
				<div class="item active">
					<img src="images/pizza1.jpg" alt="pizza1" />
				</div>
				<div class="item">
					<img src="images/pizza2.jpg" alt="pizza2" />
				</div>
				<div class="item">
					<img src="images/pizza3.jpg" alt="pizza3" />
				</div>
				...
			</div>

			
			<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</div>
    </div>
    );
}
export default Caro;