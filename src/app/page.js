import LoginForm from "@/forms/login";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="shadow-lg p-8 w-96 bg-white rounded-lg">
        <div className="flex justify-center flex-col items-center gap-2 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
