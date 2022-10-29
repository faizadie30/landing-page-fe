import AOS from 'aos';
import { useEffect, useState } from 'react';
import { Image as ImgBootstrap } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { RiCloseFill, RiMenu5Line } from 'react-icons/ri';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeToggleMenu, setActiveToggleMenu] = useState(false);

  const handlerUpdateToggleMenu = () => {
    const status = activeToggleMenu ? false : true;
    setActiveToggleMenu(status);
  };

  return (
    <>
      <section>
        <div className="d-flex justify-content-center">
          <div class="cover-img ">
            <img src="/image/cover.jpg" class="card-img-top " alt="img" />
          </div>
        </div>
      </section>
      <section>
        <Container className="mt-3">
          <h3 className="fw-bold text-center mb-5">Article</h3>
          <div className="d-flex flex-column flex-lg-row flex-xl-row flex-xxl-row justify-content-center align-items-center">
            <div class="card card-content mx-2">
              <img src="/image/cover.jpg" class="card-img-top" alt="content" />
              <div class="card-body ps-0">
                <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  ducimus?
                </p>
              </div>
            </div>
            <div class="card card-content mx-2">
              <img src="/image/cover.jpg" class="card-img-top" alt="content" />
              <div class="card-body ps-0">
                <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  ducimus?
                </p>
              </div>
            </div>
            <div class="card card-content mx-2">
              <img src="/image/cover.jpg" class="card-img-top" alt="content" />
              <div class="card-body ps-0">
                <h5 className="fw-bold">Lorem ipsum dolor sit amet.</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  ducimus?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <footer class="d-flex flex-content bg-danger align-items-center px-5 footer-content">
          Copyright @ Sahaware Assesment 2022
        </footer>
      </section>
    </>
  );
}
