import React, { use, useContext } from 'react'
import { UserDataContext } from '../../data/DataProvider';
import './HomePage.css'
const HomePage = () => {
    let { userDetails, setUserDetails } = useContext(UserDataContext);

    return (
        <div
            className="home-container"
        >
            <section
                className="header-section"
            >
                <h1>
                    Account Settings
                </h1>
            </section>
            <section
                className="profile-section"
            >
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEX09PTMzMz39/fi4uLJycno6Ojd3d3t7e3GxsbU1NTx8fHPz8/l5eXZ2dlvAcswAAACO0lEQVR4nO3a23KkIBRAUTziDfH/f3dEo42XpEUr8diz11OqZ1LlDgLaagwAAAAAAAAAAAAAAAAAAAAAAAAAQAO54O5jX5EqL0/LK105XXZJeffxR6Sx12Jso2ZspKyvtWRZnWupkeF42rPGHC0xLgxMV50WJpy9O2IyxJw/TyTXFGM+OCZ1F1QcI87nvjAJPYpjymGFaorjNWpjXDttn8fnkNYYmVsy64/WaI0pokuB1h38baUx0kZXKO3RE01pjFlcb5Y7MVIV2890xrh3MVI1md98qDPm7chUjbXZemVQGrOYM5uDDuPS19r1qq01xv+0msm8CS1rlMbEt5x2PTfEvDahxaBpjTFuqtncOsYtyxq1Mf21WWbrum7XX7j0LfF8imsUx4hUvnBhnY7/x2u+TKJbBr0xu8Rtv7/J5398WMxOi513z4fFVPvfq33VPCDGvebEzriMYzOeaepjxHfTevZdy3wtoD1GfGubavzx25aQEMZGeUzf0n8y1Cz3yi2jPUb8+GdvnLxrCQ2qY75ahprVvv+4mLkl1LxpUR9TZAkPa5THJLUojyl+nvBPihnX5M+IkcRxUR1j0kp0x7jkh87E/C5iiPkDc0xqi+pbgCKZ0Rtz6lUzrTGn6Iq59rqJKIsJi1jj0yfMyDchRstbTZJ4qbyn1RJj4mdM59Tb57Z3ke7qa42dmoGZFqST+nNs7yn7fcQVuT8pT3oH6k980EvaAAAAAAAAAAAAAAAAAAAAAAAAAPC/+gfuih4I4TnKzgAAAABJRU5ErkJggg=="
                    alt="Profile Picture"
                    className="profile-image"
                />
                <section
                    className="profile-details"
                >
                    <h2>
                        {userDetails['FullName'] && userDetails['FullName'] || "Name"}
                    </h2>
                    <h3>
                        {userDetails['EmailAddress'] && userDetails['EmailAddress'] || "Email Address"}
                    </h3>
                </section>
            </section>
            <section
                className="content-section"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam distinctio numquam officia fugit aut iure? Officiis error temporibus saepe est? Facilis molestias ex dolores reiciendis aspernatur aut nobis. Minus.
            </section>
        </div>
    )
}

export default HomePage