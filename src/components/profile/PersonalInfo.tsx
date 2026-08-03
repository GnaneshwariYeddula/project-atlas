interface Props {
  profile: {
    fullName: string;
    email: string;
    createdAt: string;
  };
}

export default function PersonalInfo({
  profile,
}: Props) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-black">
        Personal Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm text-stone-500">
            Full Name
          </p>

          <h3 className="font-semibold">
            {profile.fullName}
          </h3>
        </div>

        <div>
          <p className="text-sm text-stone-500">
            Email
          </p>

          <h3 className="font-semibold">
            {profile.email}
          </h3>
        </div>

        <div>
          <p className="text-sm text-stone-500">
            Country
          </p>

          <h3 className="font-semibold">
            Not specified
          </h3>
        </div>

        <div>
          <p className="text-sm text-stone-500">
            Member Since
          </p>

          <h3 className="font-semibold">
            {new Date(profile.createdAt).toLocaleDateString()}
          </h3>
        </div>
      </div>
    </div>
  );
}
