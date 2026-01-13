const clients = [
  { name: 'Cliente Industrial 1', logo: null },
  { name: 'Cliente Industrial 2', logo: null },
  { name: 'Cliente Industrial 3', logo: null },
  { name: 'Cliente Industrial 4', logo: null },
  { name: 'Cliente Industrial 5', logo: null },
  { name: 'Cliente Industrial 6', logo: null },
];

export default function ClientsStrip() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-wide section-padding">
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Confían en nosotros equipos industriales de toda España
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 px-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="text-muted-foreground font-medium text-sm">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
