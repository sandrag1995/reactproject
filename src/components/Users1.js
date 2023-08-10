
const Users1 = ({user}) => {


    return (

        <div className="card m-10">
            <p><b>Id:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Address:</b> {user.address.street}, <br/>
                {user.address.suite}, {user.address.city}, <br/>
                {user.address.zipcode}, {user.address.geo.lat}, <br/>
                {user.address.geo.lng}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Company:</b> {user.company.name}, <br/>
                Catchprhase: {user.company.catchPhrase}.<br/>
                {user.company.bs}</p>
        </div>
    );
}

export default Users1;