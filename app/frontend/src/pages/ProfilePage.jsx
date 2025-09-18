const ProfilePage = () => {
  return (
    <section className="page">
      <h2>Your profile</h2>
      <p>
        This is a placeholder for the future profile experience. Once authentication is wired
        to the backend, this view can display saved events, personal preferences, and more.
      </p>
      <div className="placeholder-card">
        <p>Profile summary</p>
        <ul>
          <li>Display name</li>
          <li>Favorite genres</li>
          <li>Upcoming events</li>
        </ul>
      </div>
    </section>
  );
};

export default ProfilePage;
