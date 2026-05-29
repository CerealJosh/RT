import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Account | restaurant template",
  description:
    "Sign in or create an account to manage orders, reservations, and profile settings.",
};

const AccountPage = () => {
  return (
    <main>
      <Breadcrumb title="Account" pages={["account"]} />

      <section className="py-20 bg-gray-2">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-xl bg-white shadow-1 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-blue font-medium uppercase tracking-[0.2em] mb-4">
                Welcome back
              </p>
              <h1 className="text-dark text-3xl sm:text-4xl font-semibold mb-4">
                Manage your account
              </h1>
              <p className="text-dark-2 text-base sm:text-lg">
                Access your orders, reservations, billing details, and account settings.
                Sign in to continue, or create a new account if you are new here.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Link
                href="/signin"
                className="block rounded-2xl border border-blue bg-blue/5 px-8 py-10 text-center transition hover:border-blue-dark hover:bg-blue/10"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-blue mb-3">
                  Existing customer
                </p>
                <h2 className="text-dark text-2xl font-semibold mb-2">Sign In</h2>
                <p className="text-dark-2">
                  Log in to view your orders, update your details, or manage reservations.
                </p>
              </Link>

              <Link
                href="/signup"
                className="block rounded-2xl border border-dark-3 bg-gray-1 px-8 py-10 text-center transition hover:border-gray-4 hover:bg-gray-2"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-dark-4 mb-3">
                  New to our restaurant?
                </p>
                <h2 className="text-dark text-2xl font-semibold mb-2">Create an Account</h2>
                <p className="text-dark-2">
                  Register now to save your favorites, speed up checkout, and get personalized offers.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
