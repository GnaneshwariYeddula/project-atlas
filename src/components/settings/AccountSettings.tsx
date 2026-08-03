"use client";

import { User, Mail } from "lucide-react";

interface AccountSettingsProps {
  fullName: string;
  email: string;
  onSave: (data: { fullName: string; email: string }) => Promise<void>;
}

export default function AccountSettings({
  fullName,
  email,
  onSave,
}: AccountSettingsProps) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-black">
        Account Information
      </h2>

      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          void onSave({
            fullName: String(form.get("fullName") ?? ""),
            email: String(form.get("email") ?? ""),
          });
        }}
      >

        <div>

          <label className="mb-2 block font-semibold">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-4 text-stone-400"
            />

            <input
              name="fullName"
              defaultValue={fullName}
              className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-violet-600"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Email
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-4 text-stone-400"
            />

            <input
              name="email"
              type="email"
              defaultValue={email}
              className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-violet-600"
            />

          </div>

        </div>

        <button type="submit" className="rounded-2xl bg-violet-700 px-6 py-3 font-semibold text-white hover:bg-violet-800">

          Save Changes

        </button>

      </form>

    </section>
  );
}
