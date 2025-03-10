export default function CardSection() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3214953/settings_images/unDLeaQRSyODkCaI6ltU_f01b08e5-5566-499b-83e1-9fb893a8bf52.jpg" className="card-img-top" alt="Placeholder" />
              <div className="card-body text-center">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn btn-primary">Find Out More!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
