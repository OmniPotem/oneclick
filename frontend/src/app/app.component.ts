import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  template: `
    <main class="p-6 max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">🚀 Dashboard Dev – OmniPotem</h1>

      <section class="space-y-4">
        <div *ngFor="let service of services">
          <div class="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow">
            <div>
              <h2 class="text-lg font-semibold">{{ service.name }}</h2>
              <p class="text-sm text-gray-600">{{ service.description }}</p>
            </div>
            <div class="flex space-x-2">
              <button (click)="runCommand(service.start)" class="bg-green-500 text-white px-4 py-1 rounded">Start</button>
              <button (click)="runCommand(service.stop)" class="bg-red-500 text-white px-4 py-1 rounded">Stop</button>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="text-lg font-semibold mb-2">📝 Logs</h2>
        <pre class="bg-black text-green-400 p-4 h-64 overflow-y-auto rounded-xl text-sm">
{{ logs }}
        </pre>
      </section>
    </main>
  `
})
export class AppComponent {
  services = [
    {
      name: 'Backend Server',
      description: 'Lancement du backend Node.js avec docker et nodemon',
      start: 'start-backend',
      stop: 'stop-backend',
    },
    {
      name: 'Ionic Frontend',
      description: 'Serveur de développement Ionic',
      start: 'start-ionic',
      stop: 'stop-ionic',
    },
    {
      name: 'Prisma Studio',
      description: 'Interface de base de données',
      start: 'start-prisma',
      stop: 'stop-prisma',
    },
  ];

  logs = '';

  constructor(private http: HttpClient) { }

  runCommand(command: string) {
    this.logs += `\n▶️ ${command}\n`;
    this.http.post<{ output: string }>('/api/run', { command }).subscribe((res) => {
      this.logs += res.output + '\n';
    });
  }
}
