import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function MyAccount() {
    return (
        <div>
            <Header />
            <div className="box-search-content search_active block-bg close__top">
                <form id="search_mini_form" className="minisearch" action="#">
                    <div className="field__search">
                        <input type="text" placeholder="Search entire store here..." />
                        <div className="action">
                            <a href="#"><i className="zmdi zmdi-search" /></a>
                        </div>
                    </div>
                </form>
                <div className="close__wrap">
                    <span>close</span>
                </div>
            </div>
            <div class="ht__bradcaump__area bg-image--6">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="bradcaump__inner text-center">
                                <h2 class="bradcaump-title">My Account</h2>
                                <nav class="bradcaump-content">
                                    <a class="breadcrumb_item" href="index.html">Home</a>
                                    <span class="brd-separetor">/</span>
                                    <span class="breadcrumb_item active">My Account</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my_account_area pt--80 pb--55 bg--white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Login</h3>
                                <form action="#">
                                    <div className="account__form">
                                        <div className="input__box">
                                            <label>Username or email address <span>*</span></label>
                                            <input type="text" />
                                        </div>
                                        <div className="input__box">
                                            <label>Password<span>*</span></label>
                                            <input type="text" />
                                        </div>
                                        <div className="form__btn">
                                            <button>Login</button>
                                            <label className="label-for-checkbox">
                                                <input id="rememberme" className="input-checkbox" name="rememberme" defaultValue="forever" type="checkbox" />
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                        <a className="forget_pass" href="#">Lost your password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Register</h3>
                                <form action="#">
                                    <div className="account__form">
                                        <div className="input__box">
                                            <label>Email address <span>*</span></label>
                                            <input type="email" />
                                        </div>
                                        <div className="input__box">
                                            <label>Password<span>*</span></label>
                                            <input type="password" />
                                        </div>
                                        <div className="form__btn">
                                            <button>Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>

    )
}

export default MyAccount
