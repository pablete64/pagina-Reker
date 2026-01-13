import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Zap, Bot, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { searchContent, SearchResult } from '@/data/searchData';
import { ChatAssistant } from '@/components/chat/ChatAssistant';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Empresa', href: '/empresa' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('assistant');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleSearchResultClick = (result: SearchResult) => {
    setIsDialogOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    navigate(result.url);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchResultClick(searchResults[0]);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Determine text color based on page and scroll state
  const getNavTextClass = (isActiveItem: boolean) => {
    if (isActiveItem) {
      return 'bg-primary text-primary-foreground';
    }
    
    // On home page and not scrolled: white text
    if (isHomePage && !isScrolled) {
      return 'text-white/90 hover:bg-white/10';
    }
    
    // On inner pages or scrolled: dark text
    return 'text-foreground hover:bg-secondary';
  };

  const getLogoTextClass = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }
    return 'text-foreground';
  };

  const getLogoSubtitleClass = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white/70';
    }
    return 'text-muted-foreground';
  };

  const getIconClass = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white hover:bg-white/10';
    }
    return 'text-foreground';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight ${getLogoTextClass()}`}>
                REKER TECH
              </span>
              <span className={`text-xs tracking-widest ${getLogoSubtitleClass()}`}>
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getNavTextClass(isActive(item.href))}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={getIconClass()}
                >
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="sr-only">Asistente y Búsqueda</DialogTitle>
                </DialogHeader>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="assistant" className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      Asistente
                    </TabsTrigger>
                    <TabsTrigger value="search" className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Buscar
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="assistant" className="mt-0">
                    <ChatAssistant onClose={handleDialogClose} />
                  </TabsContent>
                  
                  <TabsContent value="search" className="mt-0">
                    <form onSubmit={handleSearchSubmit} className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Buscar proyectos, servicios..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-1"
                          autoFocus={activeTab === 'search'}
                        />
                        <Button type="submit">Buscar</Button>
                      </div>
                      
                      {/* Search Results */}
                      {searchQuery.trim().length >= 2 && (
                        <div className="max-h-64 overflow-y-auto">
                          {searchResults.length > 0 ? (
                            <ul className="space-y-2">
                              {searchResults.map((result) => (
                                <li key={`${result.type}-${result.id}`}>
                                  <button
                                    type="button"
                                    onClick={() => handleSearchResultClick(result)}
                                    className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors"
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                                        result.type === 'service' 
                                          ? 'bg-primary/10 text-primary' 
                                          : 'bg-accent text-accent-foreground'
                                      }`}>
                                        {result.type === 'service' ? 'Servicio' : 'Proyecto'}
                                      </span>
                                      <span className="font-medium text-foreground">{result.title}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-1">
                                      {result.description}
                                    </p>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-center text-muted-foreground py-4">
                              No se encontraron resultados para "{searchQuery}"
                            </p>
                          )}
                        </div>
                      )}
                      
                      {searchQuery.trim().length < 2 && (
                        <p className="text-center text-muted-foreground text-sm py-8">
                          Escribe al menos 2 caracteres para buscar
                        </p>
                      )}
                    </form>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <Button asChild className="btn-primary">
              <Link to="/contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isHomePage && !isScrolled ? 'text-white' : 'text-foreground'}
                >
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
            <button
              className={`p-2 rounded-lg transition-colors ${
                isHomePage && !isScrolled ? 'text-white' : 'text-foreground'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="section-padding py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full btn-primary">
                  <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
