

const Nav = () => {
    return (
      <div>
      <nav class="navbar navbar-default navbar-home">
		<div class="container-fluid">
			
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">PIZZAMANIA</a>
			</div>
            <div>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Home</a></li>
				<li><a href="#">About Pizza</a></li>
				<li><a href="#">Pizza Types</a></li>
			</ul>
		</div>
	</div>
</nav>
    </div>
    );
}
export default Nav;